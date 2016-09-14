describe 'consequence', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:npc) { FactoryGirl.create :npc }
  let!(:consequence) { FactoryGirl.create :consequence }
  let!(:system) { FactoryGirl.create :system }
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
    describe 'Create consequence button' do
      it 'adds a new consequence to the page' do
        page.find('#new-consequence').click
        fill_in 'consequence text', with: 'blarg'
        page.select 'mild', :from => 'severity'
        within 'form' do
          click_on 'Create Consequence'
        end
        expect(page).to have_content('blarg')
      end
    end
    describe 'Delete consequence button' do
      it 'removes the consequence from the page' do
        within '#consequences-container' do
          within '#mild-target0' do
            # figure out the targeting here
            page.find('.delete').click
          end
        end
        expect(page).to_not have_content(consequence.name)
      end
    end
  end
end
