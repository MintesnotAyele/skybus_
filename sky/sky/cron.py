from django.core.management import call_command
from django_cron import CronJobBase, Schedule
def my_scheduled_job():
  try:
    call_command('dbbackup')
  except:
    pass
# myapp/cron.py

from django_cron import CronJobBase, Schedule

class MyCronJob(CronJobBase):
    RUN_EVERY_MINS = 1

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'sky.my_cron_job'  # A unique code for your cron job

    def do(self):
        # Logic to be executed by the cron job
        print("Executing my cron job...")
        # Add your code here
        call_command('dbbackup')
