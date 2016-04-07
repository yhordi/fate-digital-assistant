describe 'Skill', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :skill }
  let!(:skill_attributes) { FactoryGirl.build :skill }
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
    describe 'deleting a skill' do
      it 'can click on a delete button and no longer see the skill in the skills list' do
        page.find("#skill#{skill.id}").click
        click_on "Delete"
        expect(page).to_not have_content(skill.name)
      end
    end
    describe 'editing a skill' do
      it 'can click on the edit button, change a field on the skill, submit it, and see the new data on the page' do
        page.find("#skill#{skill.id}").click
        click_on "Edit"
        fill_in 'skillDescription', with: '1111111111'
        click_on('Update Skill')
        expect(page).to have_content('1111111111')
      end
    end
    describe 'using default skills checkbox' do
      xit 'on the create can check it and see the default skills on their new system' do

      end
    end
  end
end
