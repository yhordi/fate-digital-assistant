describe Scenario do
  let(:scenario) { FactoryGirl.create :scenario}
  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :description }
    it 'does not validate scenario with a non-unique name' do
      invalid_scenario = Scenario.new(name: scenario.name)
      expect(invalid_scenario).to_not be_valid
    end
    it 'validates a scenario with a unique name' do
      valid_scenario = Scenario.new(name: 'laskdflaskdj', description: 'p193efoka')
      expect(valid_scenario).to be_valid
    end
    it 'does not validate scenario with a non-unique description' do
      invalid_scenario = Scenario.new(name: scenario.description)
      expect(invalid_scenario).to_not be_valid
    end
    it 'validates a scenario with a unique description' do
      valid_scenario = Scenario.new(name: 'laskdflaskdj', description: 'p193efoka')
      expect(valid_scenario).to be_valid
    end
  end
end
