require "test_helper"

class TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get todo_index_url
    assert_response :success
  end
end
