describe Npc do
  let(:npc) { FactoryGirl.create :npc }
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 0)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 0)}

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_type }
    it "does not validate max_mental_stress outside of 1..5 range" do
      npc.max_mental_stress = 6
      expect(npc).to_not be_valid
    end
    it "does not validate max_physical_stress outside of 1..5 range" do
      npc.max_physical_stress = 6
      expect(npc).to_not be_valid
    end
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
    it "does not increase max_mental_stress beyond 5" do
      physique.level = 5
      npc.character_skills << will
      npc.calculate_max_stress
      expect(npc.max_mental_stress).to be <= 5
    end
    context "if the skill is removed" do
      it "resets max_mental_stress to 2" do

      end
      it "resets max_mental_stress to 2" do

      end
    end
  end
end
