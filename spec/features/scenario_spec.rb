describe 'Scenario', js: true do
  let(:user) { FactoryGirl.create :user }
  let!(:scenario) { FactoryGirl.create :scenario }
  let!(:system) { FactoryGirl.create :system }
  before(:each) do
    visit root_path
    fill_in 'name', with: user.name
    fill_in 'Password', with: user.password
    click_on 'Log In'
    click_on 'SYSTEMS'
    page.find('#systemLink1').click
  end
  describe 'index page' do
    it 'displays a list of scenarios' do
      page.find('#scenarioIndex').click
      expect(page).to have_content(scenario.name)
    end
  end
  describe 'show page' do
    it 'displays the scenario information on the page' do
      page.find('#scenarioIndex').click
      page.find('#scenario0').click
      expect(page).to have_content(scenario.name)
    end
  end
end
