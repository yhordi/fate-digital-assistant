describe 'System', js: true do
  let!(:system) { FactoryGirl.create :system }
  let(:system_attributes) { FactoryGirl.build :system}
  let(:user) { FactoryGirl.create :user }
  before(:each) do
    visit systems_path
  end
  context 'A guest user' do
    it 'sees a description on the systems page' do
      expect(page).to have_content("FATE: Dimensions is a tool")
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
      click_on 'SYSTEMS'
    end
    it 'sees a list of systems' do
      # allow_any_instance_of(Paperclip).to receive(:get).and return("hello")
      expect(page).to have_content(system.name)
    end
    it 'clicks on a system name and see the system info' do
      click_on system.name
      expect(page).to have_content(system.description)
    end
    describe 'creating a new form' do
      before(:each) do
        click_link 'Create a new system'
      end
      it 'sees a form redered on click of the create a new system link' do
        expect(page).to have_css('#new_system')
      end
      it 'fills out a form and create a new system on button click' do
        within '#new_system' do
          fill_in 'system_name', with: system_attributes.name
          fill_in 'system_description', with: system_attributes.description
          click_on 'Create System'
        end
        expect(page).to have_content(system_attributes.name)
      end
    end
    describe 'editing an existing system' do
      before(:each) do
        click_link system.name
        click_on 'edit'
      end
      it 'fills out a form and can see the updated attribute' do
        fill_in 'Name', with: "Apple Adventure"
        click_on 'Update System'
        within '.systemContent' do
          expect(page).to have_content("Apple Adventure")
        end
      end
      it 'sees a success notification' do
        click_on 'Update System'
        expect(page).to have_content("System updated successfully!")
      end
    end
    describe 'deleting an existing system' do
      before(:each) do
        click_link system.name
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