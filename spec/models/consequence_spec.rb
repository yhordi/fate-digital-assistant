describe Consequence do
  context 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :severity }
    it { is_expected.to validate_presence_of :shift_value }
    it 'will fail validations when severity is passed a value other than mild, moderate, or severe' do
      consq = Consequence.new(severity: 'hats', name: 'hello', shift_value: 2)
      expect(consq).to_not be_valid
    end
    it 'will fails validations with a shift_value other than 2 4 or 6' do
      consq = Consequence.new(severity: 'mild', name: 'hello', shift_value: 3)
      expect(consq).to_not be_valid
    end
  end
end
