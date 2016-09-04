# SNAAS

Silly Names as a Service (an example systemd service)

__Note:__ The following information was written with Debian 8 "Jessie" in mind.

## Installation as a systemd service

1. Create a system user for the service to run as

   This isn't strictly necessary but if you don't specify a user/group in the 
   service file the process will run as root, which is usually not good.

   ```
   adduser --system --no-create-home --group snaas
   ```

2. Install the server

   I'm choosing to install into `/opt/snaas/`

   ```
   cd /opt/
   git clone https://github.com/thebinarypenguin/snaas.git
   cd snaas/
   npm install
   ```

   ```
   chmod -R 755 /opt/snaas/
   chown -R snaas:snaas /opt/snaas/
   ```

3. Install the service file

   ```
   cp /opt/snaas/snaas.service /etc/systemd/system/
   ```

   ```
   chmod 755 /etc/systemd/system/snaas.service
   chown root:root /etc/systemd/system/snaas.service
   ```

## Interacting with systemd

- Start the service

  ```
  systemctl start snaas.service
  ```

- Stop the service

  ```
  systemctl stop snaas.service
  ```

- Restart the service

  ```
  systemctl restart snaas.service
  ```

---

- Check the service's status

  ```
  systemctl status snaas.service
  ```

---

- Set the service to be started and stopped automatically when the appropriate
  targets are reached (i.e. on boot).

  ```
  systemctl enable snaas.service
  ```

- Unset the automatic starting and stopping of the service

  ```
  systemctl disable snaas.service
  ```

---

- View the service's log entries (via the systemd journal)

  ```
  journalctl -u snaas.service
  ```

## References

- [systemd home page](https://www.freedesktop.org/wiki/Software/systemd/)

- [systemd manual pages](https://www.freedesktop.org/software/systemd/man/) 
  specifically ...

  - [systemd.unit](https://www.freedesktop.org/software/systemd/man/systemd.unit.html)
  
  - [systemd.service](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
  
  - [systemd.exec](https://www.freedesktop.org/software/systemd/man/systemd.exec.html)

  - [systemctl](https://www.freedesktop.org/software/systemd/man/systemctl.html)
  
  - [journalctl](https://www.freedesktop.org/software/systemd/man/journalctl.html)


