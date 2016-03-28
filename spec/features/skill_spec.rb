describe 'Skill', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :skill }
  context 'a logged in user' do
    it 'can click on a system and see a list of skills, can click on a skill and see the page for that skill' do
      visit root_path
      fill_in 'Username', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      click_on 'SYSTEMS'
      page.find('#systemLink1').click
      page.find('#skillsIndex').click
      page.find("#skill#{skill.id}").click
      expect(page).to have_content(skill.advantage)
    end
  end
end
