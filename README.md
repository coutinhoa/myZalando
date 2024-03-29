# myZalando

Built a Zalando clone using React, Javascript and FastAPI

![zalando_home_page](https://user-images.githubusercontent.com/104270514/188320172-c281c498-a306-4f1a-8d90-db91a4701576.jpg)

![zalando_clothes_homepage](https://user-images.githubusercontent.com/104270514/189997218-0d00e6d3-4972-4dfc-9c28-4fd6d6f664e4.jpg)

![zalando_details_page](https://user-images.githubusercontent.com/104270514/188320571-0fd32583-7b43-4970-9ff4-810d2e0d9f01.jpg)

![zalando_details_page_rating](https://user-images.githubusercontent.com/104270514/188320574-32cabc62-d062-4437-b59f-87678509b83a.jpg)

![zalando_login_page](https://user-images.githubusercontent.com/104270514/188320175-3672021c-f62c-4cf2-949e-2b8d78b6a8c7.jpg)

![zalando_shopping_cart](https://user-images.githubusercontent.com/104270514/188320176-308ccbd8-f057-4911-9d32-8490ab1a05eb.jpg)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone this project to your computer with:

```sh
git clone https://github.com/coutinhoa/myZalando.git
```

2. Move to the project root directory and install the client and server packages:

```sh
cd zalando/python-server
pip install "fastapi[all]"
pip install sqlalchemy
```

## Usage

1. Run the web application in the terminal:

```sh
npm start
```

2. Run the json-server API in a new terminal window:

```sh
cd sql_app
uvicorn main:app  --reload --host 0.0.0.0 --port 8000
```

3. Access the application through the browser at http://localhost:3006.


