import sys
import logging
import rds_config
import pymysql
#rds settings
rds_host  = "nsobgoty.cvphgveti4qp.us-west-2.rds.amazonaws.com"
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name

logger = logging.getLogger()
logger.setLevel(logging.INFO)
print("I am running")

try:
    conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
    print("ok")
except:
    logger.error("ERROR: Unexpected error: Could not connect to MySql instance.")
    sys.exit()

logger.info("SUCCESS: Connection to RDS mysql instance succeeded")
def handler(event, context):
    """
    This function fetches content from mysql RDS instance
    """
    
    item_count = 0

    with conn.cursor() as cur:
        print("I am in here")
        cur.execute("select * from ballots")
        for row in cur:
            item_count += 1
            logger.info(row)
            print(row)
    conn.commit()

    return "Added %d items from RDS MySQL table" %(item_count)