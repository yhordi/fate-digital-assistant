describe Location do
  it { should validate_presence_of :name }
  it { should validate_presence_of :system_id }
  it { should validate_uniqueness_of :name }
  it { should belong_to :system }
  it { should belong_to :parent_location}
  it { should have_many :aspects }
end