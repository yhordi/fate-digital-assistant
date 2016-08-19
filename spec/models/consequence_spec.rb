describe Consequence do
  let!(:npc) { FactoryGirl.create :npc }
  let(:consq) { Consequence.new(severity: 'mild', name: 'headache', shift_value: 2, npc_id: 1) }
  context 'validations' do
    context 'will pass validations' do
      it 'when name is present' do
        expect(consq).to be_valid
      end
      it 'when severity is present' do
        expect(consq).to be_valid
      end
      it 'when shift_value is present' do
        expect(consq).to be_valid
      end
      it 'when npc_id is present' do
        expect(consq).to be_valid
      end
    end
    context 'will fail validations' do
      it 'when name is present' do
        consq.name = nil
        expect(consq).to_not be_valid
      end
      it 'when severity is present' do
        consq.severity = nil
        expect(consq).to_not be_valid
      end
      it 'when shift_value is present' do
        consq.name = nil
        expect(consq).to_not be_valid
      end
      it 'when npc_id is present' do
        consq.name = nil
        expect(consq).to_not be_valid
      end
      it 'when severity is passed a value other than mild, moderate, or severe' do
        consq = Consequence.new(severity: 'hats', name: 'hello', shift_value: 2, npc_id: 1)
        expect(consq).to_not be_valid
      end
      it 'with a shift_value other than 2 4 or 6' do
        consq = Consequence.new(severity: 'mild', name: 'hello', shift_value: 3, npc_id: 1)
        expect(consq).to_not be_valid
      end
    end
  end
end
