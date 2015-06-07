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
    it 'can click on a system and see the system info' do
      click_on system.name
      expect(page).to have_content(system.description)
    end
    it 'can create a new system by filling out a form' do
      # probably have to reimplement wait_for_ajax
      click_link 'Create a new system'
      within 'form' do
        fill_in '#system_name', with: system_attributes.name
        fill_in '#system_description', with: system_attributes.description
        click_on 'Create System'
      end
      expect(page).to have_content(system_attributes.name)
    end
  end
end