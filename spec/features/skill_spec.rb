describe 'Skill', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :skill }
  context 'a logged in user' do
    xit 'can click on a system and see a list of skills' do
      visit root_path
      fill_in 'Username', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      click_on 'SYSTEMS'
      click_on system.name
      expect(page).to have_content(skill.description)
    end
  end
end
