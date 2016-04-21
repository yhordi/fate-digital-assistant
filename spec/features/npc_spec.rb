describe 'Npc', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let(:npc) { FactoryGirl.create :npc }
  context 'a logged in user' do
      before(:each) do
      visit root_path
      fill_in 'Username', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      click_on 'SYSTEMS'
      page.find('#systemLink1').click
      page.find('#npcIndex').click
    end
    it 'can see npcs on the npc index' do
      expect(page).to have_content(user.name)
    end
  end

end
