describe 'Npc', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :skill }
  let!(:npc) { FactoryGirl.create :npc }
  let(:npc_attributes) {FactoryGirl.attributes_for :npc}
  context 'a logged in user' do
    before(:each) do
      visit root_path
      fill_in 'name', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      click_on 'SYSTEMS'
      page.find('#systemLink1').click
      page.find('#npcIndex').click
    end
    it 'can see npcs on the npc index' do
      expect(page).to have_content(npc.name)
    end
    it 'can create a new npc' do
      page.find('#newNpc').click
      fill_in 'name', with: npc_attributes[:name]
      fill_in 'background', with: npc_attributes[:background]
      click_on 'Create NPC'
      expect(page).to have_content(npc_attributes[:name])
    end
    context 'on the npc show page' do
      before(:each) do
        page.find('#npc1').click
      end
      it 'can see an npc profile' do
        expect(page).to have_content(npc.background)
      end
      it 'can delete an npc and see the list of remaining npcs' do
        page.find('#delete-npc').click
        expect(page).to_not have_content(npc.name)
      end
      it 'can edit an npc and see the new attribute' do
        page.find('#edit-npc').click
        within('form') do
          fill_in 'name', with: 'Fenty Splawn'
          click_button 'Update NPC'
        end
        expect(page).to have_content('Fenty Splawn')
      end
      it 'can add a skill to an npc' do
        page.find('#add-skill').click
        wait_for_ajax
        page.select skill.name, from: 'name'
        page.select "3", from: 'level'
        page.find('#add-skill-submit').click
        within '#skillsList' do
          expect(page).to have_content('3')
        end
      end
    end
    describe 'stress boxes' do
      before do
        page.find('#npc1').click
      end
      it 'applies the .btn-danger class to clicked stress components in #physical-stress-target' do
        page.find('#physical1').click
        wait_for_ajax
        expect(page.find('#physical1')[:class]).to include('btn-danger')
      end
      it 'applies the .btn-danger class to clicked stress components in #mental-stress-target' do
        page.find('#mental0').click
        wait_for_ajax
        expect(page.find('#mental0')[:class]).to include('btn-danger')
      end
      it 'has the .btn-danger class applied if the npc has stress' do
        expect(page.find('#physical0')[:class]).to include('btn-danger')
      end
      context 'clear button' do
        it 'resets the stress buttons with .btn default' do
          page.first('.clear').click
          wait_for_ajax
          expect(page.find('#physical0')[:class]).to include('btn-default')
        end
      end
      end
  end

end
