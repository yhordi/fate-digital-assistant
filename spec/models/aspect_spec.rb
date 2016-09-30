describe Aspect do
  describe 'Validations' do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :description }
    it { is_expected.to validate_uniqueness_of(:description).scoped_to(:aspectable_id) }
    it { is_expected.to validate_uniqueness_of(:name).scoped_to(:aspectable_id) }
  end
end
