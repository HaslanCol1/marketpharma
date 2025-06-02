CREATE TABLE TipoIdentificacion(
IdentificadorTipoIdentificacion INT IDENTITY(1,1) NOT NULL,
TipoIdentificacion VARCHAR(20) NOT NULL,
CONSTRAINT PK_TipoIdentificacion PRIMARY KEY (IdentificadorTipoIdentificacion)
);

CREATE TABLE TipoUsuario(
IdentificadorTipoUsuario INT IDENTITY(1,1) NOT NULL,
TipoUsuario VARCHAR(20) NOT NULL,
CONSTRAINT PK_TipoUsuario PRIMARY KEY (IdentificadorTipoUsuario)
);

CREATE TABLE EstadoUsuario(
IdentificadorEstadoUsuario INT IDENTITY(1,1) NOT NULL,
EstadoUsuario VARCHAR(20) NOT NULL,
CONSTRAINT PK_EstadoUsuario PRIMARY KEY (IdentificadorEstadoUsuario)
);

CREATE TABLE Usuario(
TipoIdentificacionUsuario INT NOT NULL,
NumeroIdentificacion BIGINT NOT NULL,
NombresUsuario NVARCHAR(100) NOT NULL,
ApellidosUsuario NVARCHAR(100) NOT NULL,
EmailUsuario NVARCHAR(100) NOT NULL,
ContraseñaUsuario NVARCHAR(250) NOT NULL,
TipoUsuario INT NOT NULL,
EstadoUsuario INT NOT NULL,
FechaCreacionUsuario DATETIME NOT NULL DEFAULT GETDATE(),
FechaActualizacionUsuario DATETIME NOT NULL DEFAULT GETDATE(),
CONSTRAINT PK_IdentificacionUsuario PRIMARY KEY(NumeroIdentificacion),
CONSTRAINT FK_TipoIdentificacion_Usuario FOREIGN KEY(TipoIdentificacionUsuario) REFERENCES TipoIdentificacion(IdentificadorTipoIdentificacion),
CONSTRAINT UQ_EmailUsuario UNIQUE(EmailUsuario),
CONSTRAINT FK_TipoUsuario_Usuario FOREIGN KEY(TipoUsuario) REFERENCES TipoUsuario(IdentificadorTipoUsuario),
CONSTRAINT FK_EstadoUsuario_Usuario FOREIGN KEY(EstadoUsuario) REFERENCES EstadoUsuario(IdentificadorEstadoUsuario));

CREATE TABLE EstadoCategoria(
IdentificadorEstadoCategoria INT IDENTITY(1,1) NOT NULL,
EstadoCategoria VARCHAR(20) NOT NULL,
CONSTRAINT PK_EstadoCategoria PRIMARY KEY (IdentificadorEstadoCategoria)
);

CREATE TABLE Categoria(
IdentificacionCategoria INT IDENTITY(1,1) NOT NULL,
NombreCategoria NVARCHAR(20) NOT NULL,
DescripcionCategoria NVARCHAR(250) NOT NULL,
EstadoCategoria INT NOT NULL,
FechaCreacionCategoria DATETIME NOT NULL DEFAULT GETDATE(),
FechaActualizacionCategoria DATETIME NOT NULL DEFAULT GETDATE(),
CONSTRAINT PK_Categoria PRIMARY KEY (IdentificacionCategoria),
CONSTRAINT UQ_NombreCategoria UNIQUE (NombreCategoria),
CONSTRAINT FK_EstadoCategoria FOREIGN KEY(EstadoCategoria) REFERENCES EstadoCategoria(IdentificadorEstadoCategoria));

CREATE TABLE EstadoProducto(
IdentificadorEstadoProducto INT IDENTITY(1,1) NOT NULL,
EstadoProducto VARCHAR(20) NOT NULL,
CONSTRAINT PK_EstadoProducto PRIMARY KEY (IdentificadorEstadoProducto)
);

CREATE TABLE Producto(
IdentificacionProducto INT IDENTITY(1,1) NOT NULL,
IdentificacionCategoria INT NOT NULL,
IdentificacionVendedor BIGINT NOT NULL,
ImagenProducto NVARCHAR(250) NOT NULL,
NombreProducto NVARCHAR(50) NOT NULL,
DescripcionProducto NVARCHAR(250) NOT NULL,
StockProducto INT NOT NULL,
PrecioUnitarioProducto MONEY NOT NULL,
EstadoProducto INT NOT NULL,
FechaCreacionProducto DATETIME NOT NULL DEFAULT GETDATE(),
FechaActualizacionProducto DATETIME NOT NULL DEFAULT GETDATE(),
CONSTRAINT PK_IdentificacionProducto PRIMARY KEY(IdentificacionProducto),
CONSTRAINT FK_IdentificacionCategoria FOREIGN KEY(IdentificacionCategoria) REFERENCES Categoria(IdentificacionCategoria),
CONSTRAINT FK_IdentificacionVendedor FOREIGN KEY(IdentificacionVendedor) REFERENCES Usuario(NumeroIdentificacion),
CONSTRAINT FK_EstadoProducto FOREIGN KEY(EstadoProducto) REFERENCES EstadoProducto(IdentificadorEstadoProducto));

CREATE TABLE EstadoCarrito(
IdentificadorEstadoCarrito INT IDENTITY(1,1) NOT NULL,
EstadoCarrito VARCHAR(20) NOT NULL,
CONSTRAINT PK_EstadoCarrito PRIMARY KEY (IdentificadorEstadoCarrito)
);

CREATE TABLE TipoMetodoPago(
IdentificadorTipoMetodoPago INT IDENTITY(1,1) NOT NULL,
TipoMetodoPago VARCHAR(20) NOT NULL,
CONSTRAINT PK_TipoMetodoPago PRIMARY KEY (IdentificadorTipoMetodoPago));

CREATE TABLE MetodoPago(
IdentificacionMetodoPago INT IDENTITY(1,1) NOT NULL,
IdentificacionCliente BIGINT NOT NULL,
TipoMetodoPago INT NOT NULL,
FechaCreacionMetodoPago DATETIME NOT NULL DEFAULT GETDATE(),
FechaActualizacionMetodoPago DATETIME NOT NULL DEFAULT GETDATE(),
CONSTRAINT PK_IdentificacionMetodoPago PRIMARY KEY(IdentificacionMetodoPago),
CONSTRAINT FK_IdentificacionCliente FOREIGN KEY(IdentificacionCliente) REFERENCES Usuario(NumeroIdentificacion),
CONSTRAINT FK_TipoMetodoPago FOREIGN KEY(TipoMetodoPago) REFERENCES TipoMetodoPago(IdentificadorTipoMetodoPago));

CREATE TABLE Carrito(
IdentificacionCarrito INT IDENTITY(1,1) NOT NULL,
IdentificacionCliente BIGINT NOT NULL,
EstadoCarrito INT NOT NULL,
PrecioTotalDescuento MONEY NOT NULL,
PrecioTotalEnvio MONEY NOT NULL,
MetodoPagoCliente INT NOT NULL,
FechaCreacionCarrito DATETIME NOT NULL DEFAULT GETDATE(),
FechaActualizacionCarrito DATETIME NOT NULL DEFAULT GETDATE(),
CONSTRAINT PK_IdentificacionCarrito PRIMARY KEY(IdentificacionCarrito),
CONSTRAINT FK_IdentificacionClienteCarrito FOREIGN KEY(IdentificacionCliente) REFERENCES Usuario(NumeroIdentificacion),
CONSTRAINT FK_EstadoCarrito FOREIGN KEY(EstadoCarrito) REFERENCES EstadoCarrito(IdentificadorEstadoCarrito),
CONSTRAINT FK_MetodoPagoCliente FOREIGN KEY(MetodoPagoCliente) REFERENCES MetodoPago(IdentificacionMetodoPago),
CONSTRAINT UQ_ProductoRepetido UNIQUE (IdentificacionCliente, EstadoCarrito));

CREATE TABLE Detalle_Carrito(
IdentificacionDetalleCarrito INT IDENTITY(1,1) NOT NULL,
IdentificacionCarrito INT NOT NULL,
IdentificacionProducto INT NOT NULL,
CantidadProducto INT NOT NULL,
PrecioTotalProducto MONEY NOT NULL,
CONSTRAINT FK_IdentificacionCarrito FOREIGN KEY(IdentificacionCarrito) REFERENCES Carrito(IdentificacionCarrito),
CONSTRAINT PK_IdentificacionDetalleCarrito PRIMARY KEY(IdentificacionDetalleCarrito),
CONSTRAINT FK_IdentificacionProducto FOREIGN KEY(IdentificacionProducto) REFERENCES Producto(IdentificacionProducto),
CONSTRAINT UQ_ProductoEnCarrito UNIQUE (IdentificacionCarrito, IdentificacionProducto));

