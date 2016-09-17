describe Skill do
  let(:system) { FactoryGirl.create :system }
  let!(:skill) { FactoryGirl.create :skill}
  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_uniqueness_of(:name).scoped_to(:system_id) }
  end
  describe '#names' do
    it 'returns an array containing skill names' do
      expect(Skill.names(system.id)).to include(skill.name)
    end
  end
end
