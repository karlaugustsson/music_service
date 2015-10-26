require 'test_helper'

class RegisterUserControllerTest < ActionController::TestCase
  test "should get register_user" do
    get :register_user
    assert_response :success
  end

end
