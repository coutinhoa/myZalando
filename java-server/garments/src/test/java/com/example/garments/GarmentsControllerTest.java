package  com.example.garments;

//it simulates the interaction that the API has with external users
//https://qaautomation.expert/2021/07/26/integration-testing-of-springboot-using-restassured/

import io.restassured.http.ContentType;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static io.restassured.RestAssured.given;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class GarmentsControllerTest {

    @Test
    public void testGarmentsEndpoint() {

        given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:5555/api/garments")
                .then()
                .assertThat().statusCode(200);
    }
}
