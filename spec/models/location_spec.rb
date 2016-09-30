xdescribe Location do

  let(:location) { FactoryGirl.create :location}
  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :description }
    it 'does not validate location with a non-unique name' do
      invalid_location = Location.new(name: location.name)
      expect(invalid_location).to_not be_valid
    end
    it 'validates a location with a unique name' do
      valid_location = Location.new(name: 'laskdflaskdj', description: 'p193efoka')
      expect(valid_location).to be_valid
    end
    it 'does not validate location with a non-unique description' do
      invalid_location = Location.new(name: location.description)
      expect(invalid_location).to_not be_valid
    end
    it 'validates a location with a unique description' do
      valid_location = Location.new(name: 'laskdflaskdj', description: 'p193efoka')
      expect(valid_location).to be_valid
    end
  end
end
