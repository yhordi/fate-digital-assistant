describe 'System', js: true do
  let!(:system) { FactoryGirl.create :system }
  let(:system_attributes) { FactoryGirl.build :system}
  let(:user) { FactoryGirl.create :user }
  before(:each) do
    visit systems_path
  end
  context 'A guest user' do
    it 'can see a description on the systems page' do
      expect(page).to have_content("The FATE digital assistant allows")
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
      click_on 'Systems'
    end
    it 'can see a list of systems' do
      expect(page).to have_content(system.name)
    end
    it 'can click on a system name and see the system info' do
      click_on system.name
      expect(page).to have_content(system.description)
    end
    describe 'creating a new form' do
      before(:each) do
        click_link 'Create a new system'
      end
      it 'can see a form redered on click of the create a new system link' do
        expect(page).to have_css('#new_system')
      end
      it 'can fill out a form and create a new system on button click' do
        within '#new_system' do
          fill_in 'system_name', with: system_attributes.name
          fill_in 'system_description', with: system_attributes.description
          click_on 'Create System'
        end
        expect(page).to have_content(system_attributes.name)
      end
    end
  end
end