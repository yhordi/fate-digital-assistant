describe 'System', js: true do
  let!(:system) { FactoryGirl.create :system }
  let(:system_attributes) { FactoryGirl.build :system}
  let(:user) { FactoryGirl.create :user }
  before(:each) do
    visit systems_path
  end
  context 'A guest user' do
    it 'sees a description on the systems page' do
      expect(page).to have_content("Welcome to FATE: Digital Assistant,")
    end
    it 'cannot see private systems' do
      expect(page).to_not have_content(system.name)
    end
  end
  context 'A logged in user' do
    before(:each) do
      fill_in 'Username', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      visit systems_path
    end
    it 'sees a list of systems' do
      # allow_any_instance_of(Paperclip).to receive(:get).and return("hello")
      within(".systemList") do
        within('div') do
        expect(page).to have_content(system.name)
        end
      end
    end
    it 'clicks on a system name and sees the system info' do
      page.find('#systemLink1').click
      expect(page).to have_content(system.description)
    end
    describe 'creating a new system' do
      before(:each) do
        click_button 'Create New'
      end
      it 'sees a form rendered on click of the Make a new system link' do
        expect(page).to have_content('System Name')
      end
      it 'fills out a form and creates a new system on button click' do
        fill_in 'name', with: system_attributes.name
        fill_in 'desc', with: system_attributes.description
        click_on 'Create System'
        expect(page).to have_content(system_attributes.name)
      end
      it 'can check the begin with default skills checkbox and see a list of the default skills on the skills page' do
        fill_in 'name', with: system_attributes.name
        fill_in 'desc', with: system_attributes.description
        find(:css, "#defaults").set(true)
        click_on 'Create System'
        click_on 'Skills'
        expect(page).to have_content('Athletics')
      end
      context 'raises errors' do
        it 'when validations fail' do
          fill_in 'name', with: system.name
          fill_in 'desc', with: 'help'
          click_on 'Create System'
          expect(page).to have_content("Name has already been taken")
        end
        it 'when fields are blank' do
          click_on 'Create System'
          expect(page).to have_content("can't be blank")
        end
      end
    end
    describe 'editing an existing system' do
      before(:each) do
        page.find('#systemLink1').click
        click_on 'Edit'
      end
      it 'fills out a form and can see the updated attribute' do
        fill_in 'name', with: "Apple Adventure"
        # select 'Fantasy', from: "Setting"
        click_on 'Update System'
        expect(page).to have_content("Apple Adventure")
      end
      it 'sees a success notification' do
        click_on 'Update System'
        expect(page).to have_content("System updated successfully!")
      end
    end
    describe 'deleting an existing system' do
      before(:each) do
        page.find('#systemLink1').click
        click_on 'Delete'
      end
      it 'will no longer see the system displayed' do
        expect(page).to_not have_content(system.name)
      end
      it 'can see a success message' do
        expect(page).to have_content("System deleted")
      end
    end
  end
end
