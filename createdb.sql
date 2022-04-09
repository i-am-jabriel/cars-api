DROP TABLE Vehicles;
DrOp TaBlE MAKE;
CREATE TABLE IF NOT EXISTS Makes(
    make_id SERIAL PRIMARY KEY,
    name TEXT,
    origin TEXT
);
CREATE TABLE IF NOT EXISTS Vehicles(
    vehicle_id SERIAL PRIMARY KEY,
    -- make SERIAL FOREIGN KEY REFERENCES Makes(make_id),
    make SERIAL,
    CONSTRAINT FK_make_id FOREIGN KEY (make)
    REFERENCES Makes(make_id),
    model TEXT NOT NULL,
    engine TEXT NOT NULL,
    color TEXT NOT NULL, 
    license_plate_number TEXT, 
    drive INT NOT NULL
);
INSERT INTO Makes VALUES(DEFAULT, 'BMW', 'Germany');
INSERT INTO Makes VALUES(DEFAULT, 'Ford', 'USA');
INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'BMW'), 'i8', 'V12', 'GREY', 'V34-7168', '2');
INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'Ford'), 'F250', 'V8', 'RED', 'WHOKNOWS', '4');