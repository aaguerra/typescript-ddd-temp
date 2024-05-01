Feature: Create a new bill
  In order to have bill in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing course
    Given I send a PUT request to "/bills/82f11ae9-4d90-4a4b-9ca8-7b80f22bf738" with body:
    """
    {
      "id": "82f11ae9-4d90-4a4b-9ca8-7b80f22bf738",
      "name": "The best ",
      "duration": "5 hours"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: An invalid non existing course
    Given I send a PUT request to "/bills/82f11ae9-4d90-4a4b-9ca8-7b80f22bf738" with body:
    """
    {
      "id": "82f11ae9-4d90-4a4b-9ca8-7b80f22bf738",
      "name": 5,
      "duration": "5 hours"
    }
    """
    Then the response status code should be 422

