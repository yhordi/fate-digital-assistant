describe Npc do
  let(:npc) { FactoryGirl.create :npc }
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 5)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 4)}

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_type }
  end
  describe '#calculate_max_stress' do
    xit 'returns a Fixnum' do
      expect(npc.calculate_max_stress).to be_an(Fixnum)
    end
    it 'adjusts the max_mental_stress for an npc based on will' do
      npc.character_skills << physique
      expect{npc.calculate_max_stress}.to change{npc.max_physical_stress}.by(3)
    end
    xit 'adjusts the max_physical_stress for an npc based on physique' do
    end
  end
end
