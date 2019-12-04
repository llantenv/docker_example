import schedule, time, requests, logging, os

logging.warning("Log app started")

# Execute every minutes BACKEND_URL/stuff
def job():
  response = requests.get( os.environ['BACKEND_URL'] + '/stuff')
  logging.warning(response.text)

schedule.every(1).minutes.do(job)

while True:
  schedule.run_pending()
  time.sleep(1)
