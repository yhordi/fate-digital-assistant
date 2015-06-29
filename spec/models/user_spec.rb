describe User do
  context "validations" do
    it { should validate_presence_of :name }
    it { should validate_uniqueness_of :name }
    it { should have_many :systems }
    it { should have_secure_password }
    it { should have_attached_file(:avatar)}
    it { should validate_attachment_content_type(:avatar).
                    allowing('image/png', 'image/gif', 'image/jpg').
                    rejecting('text/plain', 'text/xml') }
  end
end