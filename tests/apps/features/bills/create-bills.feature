Feature: Create a new bill
  In order to have bill in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing course
    Given I send a PUT request to "/bills/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
      "name": "The best ",
      "duration": "5 hours"
    }
    """
    Then the response status code should be 201
    And the response should be empty

