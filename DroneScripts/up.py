from dronekit import connect, VehicleMode, LocationGlobalRelative
import sys
import time

connection_string='udpin:0.0.0.0:14550'

def main():
    #flightCheck()
    #aTargetAltitude=float(input("Height: "))
    arm_and_takeoff(2)
    while 1==1:
        direction()
        time.sleep(0.25)
    '''print "Going 2m x "
    vehicle = connect(connection_string, wait_ready=True)
    vehicle.mode = VehicleMode("GUIDED")
    point1 = LocationGlobalRelative(0, 0.00002, 2)
    vehicle.simple_goto(point1)

    # sleep so we can see the change
    time.sleep(5)

    print "Going towards 2m y"
    point2 = LocationGlobalRelative(0, 0.00002, 2)
    vehicle.simple_goto(point2)

    # sleep so we can see the change
    time.sleep(5)


    print "Returning to Launch"
    vehicle.mode = VehicleMode("RTL")

    #Close vehicle object before exiting script
    print "Close vehicle object"
    vehicle.close()'''
    

def flightCheck():
    print "Start Flight Check"
    vehicle = connect(connection_string, wait_ready=True)
    # Connect to the Vehicle.
    print "Connecting to vehicle on: %s" % (connection_string)
    # Get some vehicle attributes (state)
    print "Get some vehicle attribute values:"
    print " GPS: %s" % vehicle.gps_0
    print " Battery: %s" % vehicle.battery
    print " Last Heartbeat: %s" % vehicle.last_heartbeat
    print " Is Armable?: %s" % vehicle.is_armable
    print " System status: %s" % vehicle.system_status.state
    print " Mode: %s" % vehicle.mode.name    # settable
    vehicle.close()


def arm_and_takeoff(aTargetAltitude):
    """
    Arms vehicle and fly to aTargetAltitude.
    """
    #print aTargetAltitude
    vehicle = connect(connection_string)
    print "Basic pre-arm checks"
    # Don't try to arm until autopilot is ready
    while not vehicle.is_armable:
        print " Waiting for vehicle to initialise..."
        time.sleep(1)

        
    print "Arming motors"
    # Copter should arm in GUIDED mode
    vehicle.mode = VehicleMode("GUIDED")
    vehicle.armed = True 

    # Confirm vehicle armed before attempting to take off
    while not vehicle.armed:      
        print " Waiting for arming..."
        time.sleep(1)

    print "Taking off!"
    vehicle.simple_takeoff(aTargetAltitude) # Take off to target altitude

    # Wait until the vehicle reaches a safe height before processing the goto (otherwise the command 
    #  after Vehicle.simple_takeoff will execute immediately).
    while True:
        print " Altitude: ", vehicle.location.global_relative_frame.alt 
        #Break and return from function just below target altitude.        
        if vehicle.location.global_relative_frame.alt>=aTargetAltitude*0.95: 
            print "Reached target altitude" 
            break
        time.sleep(1)
def direction():
    print "Empty"
    #leap program here
    '''if changeX>0:
            droneXvelocity= whatever to right 1
        else:
            droneXvelocity=whatever to left -1

        if changeZ>0:
            droneZvelocity=forward 1
        else:
            droneZvelocity=back -1

        if changeY>0:
            droneYvelocity=up 1
        else:
            droneYvelocity=down -1'''
    flyCurrent(x,y,z)
def flyCurrent():
    vehicle.airspeed=3
    vehicle.velocity=3*(x,y,z)

flightCheck()
#40.468204, -74.444008
#40.468200, -74.443604