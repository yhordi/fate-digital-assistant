describe Npc do
  let(:npc) { FactoryGirl.create :npc }
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 0)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 0)}

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_type }
  end
  describe '#calculate_max_stress' do
    levels = [
         {input: 1, output: 1},
         {input: 2, output: 2},
         {input: 3, output: 2},
         {input: 5, output: 3}
       ]
    levels.each do |level|
      it "adjusts the max_mental_stress for an npc based on a physique level of #{level[:input]}" do
        physique.level = level[:input]
        npc.character_skills << physique
        expect{npc.calculate_max_stress}.to change{npc.max_physical_stress}.by(level[:output])
      end
      it "adjusts the max_physical_stress for an npc based on will level of #{level}" do
        will.level = level[:input]
        npc.character_skills << will
        expect{npc.calculate_max_stress}.to change{npc.max_mental_stress}.by(level[:output])
      end
    end
    it "does not increase max_physical_stress beyond 5" do
      physique.level = 5
      npc.character_skills << physique
      npc.calculate_max_stress
      expect(npc.max_physical_stress).to be <= 5
    end
  end
end
