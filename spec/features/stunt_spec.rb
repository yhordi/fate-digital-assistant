describe 'Stunt', js: true do
  let(:user) { FactoryGirl.create :user }
  let(:stunt) { FactoryGirl.create(:stunt) }
  let!(:system) { FactoryGirl.create :system }
  let!(:npc) { FactoryGirl.create :npc }
  let(:stunt_attributes) { FactoryGirl.build(:stunt) }
  context 'a logged in user' do
    before(:each) do
      visit root_path
      fill_in 'name', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      click_on 'SYSTEMS'
      page.find('#systemLink1').click
      page.find('#npcIndex').click
      page.find('#npc1').click
    end
    it 'can click on an npc and see a list of stunts' do
      expect(page).to have_content(stunt.name)
    end
    describe 'creating a new stunt' do
      it 'can fill out a form and see their new skill on the page' do
        click_on 'Add New'
        fill_in 'name', with: stunt_attributes.name
        fill_in 'stunt-desc', with: stunt_attributes.description
        click_button 'Create Stunt'
        expect(page).to have_content(stunt_attributes.description)
      end
    end
  end
end
