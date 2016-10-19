describe 'Scenario', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:scenario) { FactoryGirl.create :scenario }
  let(:scenario_attributes) { FactoryGirl.build :scenario }
  let!(:system) { FactoryGirl.create :system }
  before(:each) do
    visit root_path
    fill_in 'name', with: user.name
    fill_in 'Password', with: user.password
    click_on 'Log In'
    page.find('#systemLink1').click
  end
  describe 'index page' do
    it 'displays a list of scenarios' do
      page.find('#scenarioIndex').click
      expect(page).to have_content(scenario.name)
    end
  end
  describe 'show page' do
    before(:each) do
      page.find('#scenarioIndex').click
      page.find('#scenario0').click
    end
    it 'displays the scenario information on the page' do
      expect(page).to have_content(scenario.name)
    end
    it 'can delete a scenario and see the list of remaining scenarios' do
      page.find('#delete-scenario').click
      expect(page).to_not have_content(scenario.name)
    end
    it 'can edit an scenario and see the new attribute' do
      page.find('#edit-scenario').click
      within('form') do
        fill_in 'name', with: 'Fanty Splorn'
        click_button 'Update Scenario'
      end
      expect(page).to have_content('Fanty Splorn')
    end
  end
  describe 'create form' do
    it 'can fill out a form and see the new scenario in the scenarios list' do
      page.find('#scenarioIndex').click
      page.find('#newScenario').click
      fill_in 'name', with: scenario_attributes[:name]
      fill_in 'description', with: scenario_attributes[:name]
      click_on 'Create Scenario'
      expect(page).to have_content(scenario_attributes[:name])
    end
  end
end
