# MongoDB Replica Set Setup

This script sets up a MongoDB replica set on an Ubuntu machine. It includes the following steps:

1. **Updating Packages**: Updates the package list.

2. **Java Installation**: Installs JDK 11.

3. **MongoDB Installation**: Installs MongoDB 6.0.

4. **MongoDB Configuration**: Configures MongoDB settings, restores the database, creates a MongoDB user, and sets up security.

5. **Replica Set Configuration**: Sets up a MongoDB replica set.

## Prerequisites

- Ubuntu machine
- Root access
- Internet connection

## Usage

1. Clone this repository:

   ```sh
   git clone https://github.com/your-username/mongodb-replica-set.git
2. Navigate to the cloned directory:
   ```sh
   cd mongodb-replica-set
3. Execute the script:
   ```sh
   ./mongodb_replica_setup.sh
# Configuration
Before running the script, make sure to enter the correct IP address when prompted.
You can customize MongoDB configurations by modifying the script.
# Accessing MongoDB
MongoDB: mongodb://<IP_ADDRESS>:27017
   
