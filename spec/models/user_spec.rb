describe User do
  describe "validations" do
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_uniqueness_of :name }
    it { is_expected.to have_secure_password }
    it { is_expected.to have_attached_file(:avatar)}
    it { is_expected.to validate_attachment_content_type(:avatar).
      allowing('image/png', 'image/gif', 'image/jpg').
      rejecting('text/plain', 'text/xml') }
  end
  describe "associations" do
    it { is_expected.to have_many :systems }
    it { is_expected.to have_many :adventures }
  end
end
