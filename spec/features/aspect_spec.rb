describe 'Aspect', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:aspect) { FactoryGirl.create(:aspect) }
  let(:aspect_attrs) { FactoryGirl.build(:aspect) }
  let!(:system) { FactoryGirl.create :system }
  let!(:npc) { FactoryGirl.create :npc }
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
    it 'can see aspects on the npc page' do
      within('#aspects-container') do
        expect(page).to have_content(aspect.name)
      end
    end
    it 'can fill out a form and see the new aspect on the page' do
      click_button('Add New Aspect')
      fill_in 'name', with: aspect_attrs.name
      fill_in 'aspect-desc', with: aspect_attrs.description
      click_button('Create Aspect')
      expect(page).to have_content(aspect_attrs.name)
    end
  end
end
