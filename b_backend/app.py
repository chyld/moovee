import subprocess
import uuid
from os.path import abspath, dirname, join

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel


class Movie(BaseModel):
    url: str


app = FastAPI()

repo_dir = dirname(dirname(abspath(__file__)))
static_dir = join(repo_dir, "a_frontend/build/static")
templates_dir = join(repo_dir, "a_frontend/build/templates")
downloads_dir = join(repo_dir, "downloads")

app.mount("/static", StaticFiles(directory=static_dir), name="static")
templates = Jinja2Templates(directory=templates_dir)


@app.get("/")
def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})


@app.post("/api/download")
def download_video(movie: Movie):
    file_uuid = str(uuid.uuid4())

    cmd = [
        "uv",
        "run",
        "yt-dlp",
        "-o",
        f"{downloads_dir}/{file_uuid}.%(ext)s",
        movie.url,
    ]

    subprocess.Popen(
        cmd,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        start_new_session=True,
    )

    return {"url": movie.url, "uuid": file_uuid}
