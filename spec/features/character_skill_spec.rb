describe 'character_skill', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :character_skill}
  let!(:npc) { FactoryGirl.create :npc }
  let(:npc_attributes) {FactoryGirl.attributes_for :npc}
  before(:each) do
    visit root_path
    fill_in 'Username', with: user.name
    fill_in 'Password', with: user.password
    click_on 'Log In'
    click_on 'SYSTEMS'
    page.find('#systemLink1').click
    page.find('#npcIndex').click
    page.find("#npc1").click
  end

  describe 'delete button' do
    it 'removes the skill from the page' do
      within('#skillsList') do
        page.find('.delete').click
        expect(page).to_not have_content(skill.name)
      end
    end
  end
end
