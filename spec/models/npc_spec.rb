describe Npc do
  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_type }
  end
  describe '#types' do
    it 'returns an array containing three types' do
      expect(Npc.npc_types.length).to eq(3)
    end
  end
end
