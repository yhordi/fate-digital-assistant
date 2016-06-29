describe Npc do
  let(:npc) { FactoryGirl.create :npc }
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 5)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 5)}

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_type }
  end
  describe '#calculate_max_stress' do
    it 'adjusts the max_mental_stress for an npc based on a physique level of 5' do
      npc.character_skills << physique
      expect{npc.calculate_max_stress}.to change{npc.max_physical_stress}.by(3)
    end
    it 'adjusts the max_physical_stress for an npc based on will level of 5' do
      npc.character_skills << will
      expect{npc.calculate_max_stress}.to change{npc.max_mental_stress}.by(3)
    end
  end
end
