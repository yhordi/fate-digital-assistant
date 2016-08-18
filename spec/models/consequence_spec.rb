describe Consequence do
  context 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :severity }
    it 'will fail validations when severity is passed a value other than mild, moderate, or severe' do
      consq = Consequence.new(severity: 'hats', name: 'hello')
      expect(consq).to_not be_valid
    end
  end
end
