describe Npc do
  let(:npc) { FactoryGirl.create :npc }
  let(:physique) { CharacterSkill.new(name: 'Physique', level: 0)}
  let(:will) { CharacterSkill.new(name: 'Will', level: 0, npc_id: 1)}
  let(:consequence) { FactoryGirl.create :consequence }

  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :npc_type }
    it { is_expected.to validate_presence_of :system_id }
    it "does not validate max_mental_stress outside of 1..5 range" do
      npc.max_mental_stress = 6
      expect(npc).to_not be_valid
    end
    it "does not validate max_physical_stress outside of 1..5 range" do
      npc.max_physical_stress = 6
      expect(npc).to_not be_valid
    end
    it 'does not validate an npc with more than 4 consequences' do
      5.times do
        npc.consequences << Consequence.new(name: Faker::Lorem.word, severity: 'mild', shift_value: 2)
      end
      expect(npc).to_not be_valid
    end
    it 'validates an npc with up to 4 consequences' do
      4.times do
        npc.consequences << Consequence.new(name: Faker::Lorem.word, severity: 'mild', shift_value: 2)
      end
      expect(npc).to be_valid
    end
    it 'does not validate an npc with more than one severe consequence' do
      npc.consequences << Consequence.create(name: Faker::Lorem.word, severity: 'severe', shift_value: 6, npc_id: 1)
      npc.consequences << Consequence.create(name: Faker::Lorem.word, severity: 'severe', shift_value: 6, npc_id: 1)
      expect(npc).to_not be_valid
    end
  end
  describe '#adjust_max_stress' do
    it 'adjusts the max_physical_stress when physique is added' do
      npc.adjust_max_stress(physique)
      expect(npc.max_physical_stress).to eq(2)
    end
    it 'adjusts the max_mental_stress when Will is added' do
      npc.adjust_max_stress(will)
      expect(npc.max_mental_stress).to eq(2)
    end
  end
  describe '#reset_max_stress' do
    before do
      npc.max_physical_stress = 5
      npc.max_mental_stress = 4
      npc.save
    end
    it 'resets max_physical_stress to 2 when passed Physique as a parameter' do
      npc.reset_max_stress(physique)
      expect(npc.max_physical_stress).to eq(2)
    end
    it 'resets max_mental_stress to 2 when passed Will as a parameter' do
      npc.reset_max_stress(will)
      expect(npc.max_mental_stress).to eq(2)
    end
  end
  describe 'mild?' do
    it 'should return true if the last consequence that was added has a severity attribute of mild' do
      npc.consequences << consequence
      expect(npc.mild?).to be(true)
    end
    it 'should return nil if the last consequence that was added has a severity attribute other than mild' do
      npc.consequences << Consequence.new(name: 'ajshdfkjha', severity: 'moderate', shift_value: 4)
      expect(npc.mild?).to be(false)
    end
  end
end
