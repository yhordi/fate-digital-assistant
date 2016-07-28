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

end
