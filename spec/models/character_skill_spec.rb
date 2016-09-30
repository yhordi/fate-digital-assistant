describe CharacterSkill do
  let(:npc) { FactoryGirl.create :npc }
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 0, npc_id: npc.id)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 0, npc_id: npc.id)}
  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_id }
    it 'validates uniqueness of a character_skill in the scope of an npc' do
      physique.save
      expect{physique.save}.to_not change{npc.character_skills.count}
    end
  end
  describe '#calculate_max_stress' do
    levels = [
         {input: 0, output: 2},
         {input: 1, output: 3},
         {input: 2, output: 4},
         {input: 3, output: 4},
         {input: 4, output: 4},
         {input: 5, output: 5},
         {input: 6, output: 5},
       ]
    levels.each do |level|
      it "returns #{level[:input]} based on a physique level of #{level[:output]}" do
        physique.level = level[:input]
        expect(physique.calculate_max_stress).to eq(level[:output])
      end
      it "returns #{level[:input]} based on a will level of #{level[:output]}" do
        will.level = level[:input]
        expect(will.calculate_max_stress).to eq(level[:output])
      end
    end
  end
  describe '#will' do
    it 'returns true if the name of the skill is will' do
      expect(will.will?).to eq(true)
    end
    it 'returns false if the name of the skill is not will' do
      expect(physique.will?).to eq(false)
    end
  end
  describe '#physique' do
    it 'returns true if the name of the skill is physique' do
      expect(physique.physique?).to eq(true)
    end
    it 'returns false if the name of the skill is not physique' do
      expect(will.physique?).to eq(false)
    end
  end
end
