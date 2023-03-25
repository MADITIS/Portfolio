from app import create_app
from app.views.views import home_page
from dotenv import load_dotenv
load_dotenv()

app = create_app()
app.register_blueprint(home_page)
# app.register_blueprint(mail_bp)


if __name__ == "__main__":
    app.run()
