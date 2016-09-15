describe 'character_skill', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :character_skill }
  let!(:physique) { FactoryGirl.create :physique }
  let!(:will) { FactoryGirl.create :will }
  let!(:npc) { FactoryGirl.create :npc }
  let(:npc_attributes) { FactoryGirl.attributes_for :npc }
  before(:each) do
    visit root_path
    fill_in 'name', with: user.name
    fill_in 'Password', with: user.password
    click_on 'Log In'
    click_on 'SYSTEMS'
    page.find('#systemLink1').click
    page.find('#npcIndex').click
    page.find("#npc1").click
  end

  describe 'delete button' do
    it 'removes the skill from the page' do
      within('#characterSkill0') do
        page.find('.delete').click
        expect(page).to_not have_content(skill.name)
      end
    end
  end
  describe 'skill level select' do
    it 'raises the physical stress level when the physique level is raised' do
      within('#characterSkill1') do
        page.find('button').click
        page.select '3'
      end
      expect(page).to have_css('#physical3')
    end
    it 'raises the mental stress level when the will level is raised' do
      within('#characterSkill2') do
        page.find('button').click
        page.select '3'
      end
      expect(page).to have_css('#mental3')
    end
  end
end
