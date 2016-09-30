describe System do
  let(:system) { FactoryGirl.build :system}
  describe 'associations' do
    it { should belong_to :user }
  end
  describe 'validations' do
    it { should validate_presence_of :name }
    it { should validate_presence_of :description }
    it { should validate_uniqueness_of :name }
    it { should validate_uniqueness_of :description }
  end
  describe '#default_skills' do
    let(:system_double) {double('system')}
    let(:params) {{"system" => {"default_set" => "true"}}}
    let(:incorrect_params) {{"system" => {"default_set" => "false"}}}
    it 'calls #seed_defaults with correct parameters' do
      expect(system_double).to receive(:default_set).with(params).and_return(Skill.where(name: 'Will'))
      system_double.default_set(params)
    end
    it 'does not call seed_defaults if passed incorrect parameters' do
      expect(system_double).to receive(:default_set).with(incorrect_params).and_return(nil)
      system_double.default_set(incorrect_params)
    end
  end
  describe '#seed_defaults' do
    it 'seeds default skills in the database' do
      expect{system.seed_defaults(system.id)}.to change{Skill.count}.by(18)
    end
  end
end
