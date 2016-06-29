describe Npc do
  let(:npc) { FactoryGirl.create :npc }
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 0)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 0)}

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_type }
  end
  describe '#calculate_max_stress' do
    levels = [1,2,3,5]
    levels.each do |level|
      it "adjusts the max_mental_stress for an npc based on a physique level of #{level}" do
        physique.level = level
        if level.between?(3, 4)
          level = 2
        elsif level == 5
          level = 3
        end
        npc.character_skills << physique
        expect{npc.calculate_max_stress}.to change{npc.max_physical_stress}.by(level)
      end
      it "adjusts the max_physical_stress for an npc based on will level of #{level}" do
        will.level = level
        if level.between?(3, 4)
          level = 2
        elsif level == 5
          level = 3
        end
        npc.character_skills << will
        expect{npc.calculate_max_stress}.to change{npc.max_mental_stress}.by(level)
      end
    end
  end
end
