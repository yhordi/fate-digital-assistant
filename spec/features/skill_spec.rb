describe 'Skill', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :skill }
  context 'a logged in user' do
    before(:each) do
      visit root_path
      fill_in 'Username', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      click_on 'SYSTEMS'
      page.find('#systemLink1').click
      page.find('#skillsIndex').click
    end
    it 'can click on a system and see a list of skills, can click on a skill and see the page for that skill' do
      page.find("#skill#{skill.id}").click
      expect(page).to have_content(skill.advantage)
    end
    describe 'creating a new skill' do
      it 'can fill out a form and see their new skill on the page' do
        click_on 'Create New'
        fill_in 'name', with: 'Basket Weaving'
        fill_in 'skillDescription', with: Faker::Lorem.paragraph
        fill_in 'advantage', with: Faker::Lorem.paragraph
        fill_in 'overcome', with: Faker::Lorem.paragraph
        fill_in 'attack', with: Faker::Lorem.paragraph
        fill_in 'defend', with: Faker::Lorem.paragraph
        click_button 'Create Skill'
        expect(page).to have_content('Basket Weaving')
      end
    end
  end
end
