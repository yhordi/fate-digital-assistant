describe Adventure do
  describe 'validations' do
    it { is_expected.to validate_presence_of :title}
  end
  describe 'associations' do
    it { is_expected.to belong_to :game_master }
  end
end
