describe 'Aspect', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:npc_aspect) { FactoryGirl.create(:npc_aspect) }
  let(:aspect_attrs) { FactoryGirl.build(:npc_aspect) }
  let!(:system) { FactoryGirl.create :system }
  let!(:npc) { FactoryGirl.create :npc }
  let!(:scenario) {FactoryGirl.create :scenario}
  let!(:scenario_aspect) { FactoryGirl.create(:scenario_aspect) }
  context 'a logged in user' do
    before(:each) do
      visit root_path
      fill_in 'name', with: user.name
      fill_in 'Password', with: user.password
      click_on 'Log In'
      page.find('#systemLink1').click
    end
    context 'on the npc page' do
      before(:each) do
        page.find('#npcIndex').click
        page.find('#npc1').click
      end
      it 'can see aspects on the npc page' do
        within('#aspects-container') do
          expect(page).to have_content(npc_aspect.name)
        end
      end
      describe 'creating an aspect' do
        before(:each) do
          page.find('#new-aspect').click
        end
        it 'can fill out a form and see the new aspect on the page' do
          fill_in 'name', with: aspect_attrs.name
          fill_in 'aspect-desc', with: aspect_attrs.description
          click_button('Create Aspect')
          expect(page).to have_content(aspect_attrs.description)
        end
        it 'can see an error when submitting the form with bad params' do
          fill_in 'name', with: npc_aspect.name
          fill_in 'aspect-desc', with: npc_aspect.description
          click_button('Create Aspect')
          expect(page).to have_content("Name has already been taken")
        end
      end
      describe 'deleting a aspect' do
        it 'can click on a delete button and no longer see the aspect on the npc' do
          within('.panel-title') do
            page.find('.delete').click
          end
          expect(page).to_not have_content(npc_aspect.description)
        end
      end
      describe 'editing an aspect' do
        it 'can click on the edit button, change a field on the aspect, submit it, and see the new data on the npc' do
          page.find('.edit-aspect').click
          fill_in 'name', with: '1111111111'
          click_on('Update aspect')
          expect(page).to have_content('1111111111')
        end
      end
    end
  context 'on the scenario page' do
    before(:each) do
      page.find('#scenarioIndex').click
      page.find('#scenario0').click
    end
    it 'can see aspects on the npc page' do
      within('#aspects-container') do
        expect(page).to have_content(scenario_aspect.name)
      end
    end
    describe 'creating an aspect' do
      before(:each) do
        page.find('#new-aspect').click
      end
      it 'can fill out a form and see the new aspect on the page' do
        fill_in 'name', with: aspect_attrs.name
        fill_in 'aspect-desc', with: aspect_attrs.description
        click_button('Create Aspect')
        expect(page).to have_content(aspect_attrs.name)
      end
      it 'can see an error when submitting the form with bad params' do
        fill_in 'name', with: scenario_aspect.name
        fill_in 'aspect-desc', with: scenario_aspect.description
        click_button('Create Aspect')
        expect(page).to have_content("Name has already been taken")
      end
    end
    describe 'deleting a aspect' do
      it 'can click on a delete button and no longer see the aspect on the scenario' do
        within('.panel-title') do
          page.find('.delete').click
        end
        expect(page).to_not have_content(scenario_aspect.description)
      end
    end
    describe 'editing an aspect' do
      it 'can click on the edit button, change a field on the aspect, submit it, and see the new data on the scenario' do
        page.find('.edit-aspect').click
        fill_in 'name', with: '1111111111'
        click_on('Update aspect')
        expect(page).to have_content('1111111111')
      end
    end
  end
  end
end
